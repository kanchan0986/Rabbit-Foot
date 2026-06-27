import * as React from "react"

import { Calendar } from "~/components/ui/calendar"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "~/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { FaCalendarDays } from "react-icons/fa6"

// Utility function to format a Date object into a readable string
function formatDate(date: Date | undefined) {
  if (!date) {
    return "" // Return empty string if no date is provided
  }

  // Format date as "Month DD, YYYY" (e.g., June 01, 2025)
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

// Utility function to check if a Date object is valid
function isValidDate(date: Date | undefined) {
  if (!date) {
    return false // Invalid if undefined
  }
  return !isNaN(date.getTime()) // Valid if getTime() is not NaN
}

// Main component for date picker input
export function DatePickerInput() {
  // State to control whether the calendar popover is open
  const [open, setOpen] = React.useState(false)

  // State to hold the currently selected date
  const [date, setDate] = React.useState<Date | undefined>(
    new Date() // Default to today's date
  )

  // State to track the visible month in the calendar
  const [month, setMonth] = React.useState<Date | undefined>(date)

  // State to store the formatted date string for the input field
  const [value, setValue] = React.useState(formatDate(date))

  return (
    <InputGroup className="border-none">
      <InputGroupInput
        id="date-required"
        value={value} // Display formatted date string
        name="date"
        required
        placeholder="June 01, 2025" // Example placeholder format
        onChange={(e) => {
          const date = new Date(e.target.value) // Parse user input into Date
          setValue(e.target.value) // Update raw input value
          if (isValidDate(date)) {
            setDate(date) // Update selected date if valid
            setMonth(date) // Sync calendar month with selected date
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault()
            setOpen(true) // Open calendar when pressing ArrowDown
          }
        }}
      />
      <InputGroupAddon align="inline-end">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <InputGroupButton
              id="date-picker"
              variant="ghost"
              size="icon-xs"
              aria-label="Select date"
              className="bg-transparent! text-rf-white-100! xmd:cursor-pointer"
            >
              <FaCalendarDays /> {/* Calendar icon button */}
              <span className="sr-only">Select date</span>
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single" // Single date selection mode
              selected={date} // Highlight currently selected date
              month={month} // Show current month in calendar
              onMonthChange={setMonth} // Update month when user navigates
              onSelect={(date) => {
                setDate(date) // Update selected date
                setValue(formatDate(date)) // Update input with formatted date
                setOpen(false) // Close calendar after selection
              }}
            />
          </PopoverContent>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  )
}