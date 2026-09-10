import * as React from "react";
import { Combobox } from "@base-ui/react/combobox";
import { Dialog } from "@base-ui/react/dialog";
import type { Degree } from "~/data/static-data";
import { CheckIcon, PlusIcon, XIcon } from "lucide-react";

type ComboboxCreatableDegreeProps = {
  doctorDegree?: Degree[];
  setDoctorDegree: React.Dispatch<React.SetStateAction<Degree[] | undefined>>;
  degreeList: Degree[];
  setDegreeList: React.Dispatch<React.SetStateAction<Degree[]>>;
  name: string;
};

// Component for selecting or creating doctor degrees using a combobox
export default function ComboboxCreatableDegree({
  doctorDegree = [], // Current selected degrees
  setDoctorDegree, // Setter function to update selected degrees
  degreeList, // List of available degrees
  setDegreeList, // Setter function to update available degree list
  name, // Field name for form submission
}: ComboboxCreatableDegreeProps) {

   // Unique ID for accessibility
  const id = React.useId();

  // Local state for query input and dialog visibility
  const [query, setQuery] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);

  // Refs for handling new degree creation
  const createInputRef = React.useRef<HTMLInputElement | null>(null);
  const pendingQueryRef = React.useRef("");

  // Handle pressing Enter to create new degree
  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && query.trim() !== "") {
      const normalized = query.trim();
      if (!degreeList.includes(normalized as Degree)) {
        pendingQueryRef.current = normalized; // Store pending degree name
        setOpenDialog(true); // Open dialog to confirm creation
      }
    }
  }

  // Handle submission of new degree creation form
  function handleCreateSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = createInputRef.current?.value.trim();
    if (!value) return;

    const newDegree = value as Degree;

    // Add new degree to list if not already present
    if (!degreeList.includes(newDegree)) {
      setDegreeList((prev) => [...prev, newDegree]);
    }

    // Add new degree to doctor’s selected degrees if not already present
    if (!doctorDegree.includes(newDegree)) {
      setDoctorDegree((prev) => [...(prev ?? []), newDegree]);
    }
    setOpenDialog(false); // Close dialog
    setQuery(""); // Reset query
  }

  // Items shown in combobox (include "Create ..." option if query not in list)
  const itemsForView: Degree[] =
    query.trim() && !degreeList.includes(query.trim() as Degree)
      ? [...degreeList, `Create "${query.trim()}"` as Degree]
      : degreeList;

  return (
    <React.Fragment>
      <Combobox.Root
        items={itemsForView} // Items to display
        multiple // Allow multiple selections
        value={doctorDegree} // Current selected values
        inputValue={query} // Current query input
        onInputValueChange={setQuery} // Update query state
        onValueChange={(next) => {
          // If "Create ..." option selected, open dialog
          const creatable = next.find((item) => item.startsWith('Create "'));
          if (creatable) {
            pendingQueryRef.current = query.trim();
            setOpenDialog(true);
            return;
          }
          // Otherwise update selected degrees
          setDoctorDegree(next as Degree[]);
        }}
      >
        {/* Hidden input for form submission */}
        <input
          name={name}
          hidden
          readOnly
          value={doctorDegree ? doctorDegree : ""}
        />

        {/* Input group with chips for selected degrees */}
        <div className="w-full flex flex-col gap-1">
          <Combobox.InputGroup className="flex min-h-8 w-64 cursor-text flex-wrap items-center gap-1 border border-rf-grey-100/20 bg-white dark:bg-neutral-950 px-2 py-1 rounded-xs focus-within:border-rf-primary focus-within:ring-1 focus-within:ring-rf-primary dark:focus-within:outline-white w-full">
            <Combobox.Value>
              {(value: Degree[]) => (
                <Combobox.Chips className="flex w-full flex-wrap items-center gap-1">
                  {/* Render each selected degree as a chip with remove option */}
                  {value.map((deg) => (
                    <Combobox.Chip
                      key={deg}
                      className="group flex min-h-[calc(1.5rem-2px)] rounded-sm cursor-default items-center gap-1 overflow-hidden bg-rf-primary-300 py-0 pr-1 pl-2 leading-none text-neutral-950 outline-none focus-within:bg-neutral-950 focus-within:text-white dark:bg-neutral-800 dark:text-white dark:focus-within:bg-white dark:focus-within:text-neutral-950 text-xs font-medium"
                    >
                      {deg}
                      <Combobox.ChipRemove
                        className="flex size-3 items-center justify-center border-0 bg-transparent p-0 text-rf-grey-100/60 hover:text-black group-focus-within:hover:bg-neutral-700 dark:hover:bg-neutral-700 dark:group-focus-within:hover:bg-neutral-200"
                        aria-label={`Remove ${deg}`}
                      >
                        <XIcon />
                      </Combobox.ChipRemove>
                    </Combobox.Chip>
                  ))}

                  {/* Input for typing new degree */}
                  <Combobox.Input
                    id={`selected-${name}`}
                    placeholder={value.length > 0 ? "" : "Not Available"}
                    className="h-[calc(1.5rem-2px)] min-w-12 flex-1 border-0 bg-white p-0 text-sm placeholder:text-xbase lg:placeholder:text-lg dark:bg-neutral-950 font-normal text-neutral-950 outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400 dark:text-white"
                    onKeyDown={handleInputKeyDown}
                  />
                </Combobox.Chips>
              )}
            </Combobox.Value>
          </Combobox.InputGroup>
        </div>

        {/* Dropdown popup with degree list */}
        <Combobox.Portal>
          <Combobox.Positioner className="z-1 outline-none" sideOffset={4}>
            <Combobox.Popup className="w-[var(--anchor-width)] max-h-[min(var(--available-height),24.5rem)] overflow-y-auto border border-transparent p-1 rounded-md bg-rf-primary-300 py-1 text-neutral-950 shadow-md dark:border-white dark:bg-neutral-950 dark:text-white">
              <Combobox.Empty>
                <div className="py-2 px-2 text-sm text-neutral-500 dark:text-neutral-400">
                  No degrees found.
                </div>
              </Combobox.Empty>
              <Combobox.List>
                {(item: Degree) =>
                  item.startsWith('Create "') ? (
                    // Special item to create new degree
                    <Combobox.Item
                      key={item}
                      value={item}
                      className="grid cursor-default grid-cols-[1rem_1fr] items-center gap-2 p-2 text-sm leading-4 outline-none select-none hover:bg-rf-primary-200 dark:hover:bg-neutral-800 rounded-sm"
                    >
                      <span className="col-start-1">
                        <PlusIcon className="size-4" />
                      </span>
                      <span className="col-start-2">{item}</span>
                    </Combobox.Item>
                  ) : (
                    // Regular degree item
                    <Combobox.Item
                      key={item}
                      value={item}
                      className="grid cursor-default grid-cols-[1rem_1fr] items-center gap-2 p-2 text-sm leading-4 outline-none select-none hover:bg-rf-primary-200 dark:hover:bg-neutral-800 rounded-sm"
                    >
                      <span>{item}</span>
                      <Combobox.ItemIndicator className="col-start-12">
                        <CheckIcon className="size-4" />
                      </Combobox.ItemIndicator>
                    </Combobox.Item>
                  )
                }
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>

      {/* Dialog for confirming creation of new degree */}
      <Dialog.Root
        open={openDialog}
        onOpenChange={setOpenDialog}
        modal={"trap-focus"}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 bg-rf-primary opacity-30 dark:opacity-70 transition-opacity" />
          <Dialog.Popup
            className="fixed top-1/2 left-1/2 z-1 w-[24rem] max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 border border-transparent rounded-sm bg-white p-6 text-neutral-950 shadow-lg dark:border-white dark:bg-neutral-950 dark:text-white"
            initialFocus={createInputRef}
          >
            <Dialog.Title className="text-sm font-bold text-rf-primary">
              Create new degree
            </Dialog.Title>
            <Dialog.Description className="mb-4 text-xs text-neutral-600 dark:text-neutral-400">
              Add a new degree to list.
            </Dialog.Description>
            <form onSubmit={handleCreateSubmit}>
              {/* Input field for new degree name */}
              <input
                ref={createInputRef}
                defaultValue={pendingQueryRef.current}
                placeholder="Degree name"
                className="h-8 w-full rounded-sm border border-rf-grey-100/40 bg-white dark:bg-neutral-950 px-2 text-sm font-normal text-neutral-950 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus-visible:outline-2 focus-visible:outline-rf-primary dark:focus-visible:outline-white dark:border-white dark:text-white"
              />
              {/* Action buttons for dialog */}
              <div className="mt-4 flex justify-end gap-3">
                <Dialog.Close className="px-3 py-1 rounded-full border border-rf-primary bg-white text-sm text-rf-primary hover:bg-rf-primary hover:text-white dark:border-white dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-800">
                  Cancel
                </Dialog.Close>
                <button
                  type="submit"
                  className="px-3 py-1 rounded-full border border-rf-primary bg-white text-sm text-rf-primary hover:bg-rf-primary hover:text-white dark:border-white dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-800"
                >
                  Create
                </button>
              </div>
            </form>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </React.Fragment>
  );
}
