import type { ReactNode } from 'react';
import Wrapper from './Wrapper'
import Sky from './vectors/Sky'

type CustomErrorProps = {
    children: ReactNode;
}

export default function CustomError({children}: CustomErrorProps) {
  return (
      <Wrapper as={'section'} className="relative py-6 [&>div]:flex [&>div]:flex-col [&>div]:h-[50vh] [&>div]:gap-y-6 xs:py-10 xs:[&>div]:gap-y-10 xmd:[&>div]:gap-20 xl:py-20">
        {/* Animating sky background */}
        <Sky className="fill-rf-primary-200/40"/>
        <div className="relative h-full flex justify-center items-center gap-4 xs:gap-10 xmd:gap-15">
          <h1 className="capitalize text-rf-primary text-xl lg:text-3xl text-shadow-lg tracking-wide text-center">{children}</h1>
        </div>
      </Wrapper>
  )
}