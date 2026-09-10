import { Spinner } from '../ui/spinner'
import Sky from './vectors/Sky'
import Wrapper from './Wrapper'

type Props = {}

export default function Loader({}: Props) {
  return (
    <main className="relative">
        <Sky className='fill-rf-primary-200/40'/>
        <Wrapper
            as={"section"}
            className="relative [&>div]:flex [&>div]:flex-row [&>div]:justify-center [&>div]:items-center [&>div]:h-screen"
        >
            <h1 className="text-rf-primary-100 flex items-center gap-x-2 lg:gap-x-3">
                <Spinner className='size-7 lg:size-9' /> <span className='text-2xl lg:text-3xl'>Please wait...</span>
            </h1>
        </Wrapper>
    </main>
  )
}