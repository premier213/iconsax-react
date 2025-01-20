import { type VariantProps } from "class-variance-authority"
import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"

interface LinkProps
  extends AriaLinkProps,
    VariantProps<typeof buttonVariants> {}

const Link = ({ className, variant, size, ...props }: LinkProps) => {
  return (
    <AriaLink
      className={composeRenderProps(className, (className) =>
        cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )
      )}
      {...props}
    />
  )
}

export { Link }
export type { LinkProps }

