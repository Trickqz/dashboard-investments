import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ModeToggleEcommerce() {
  const { setTheme } = useTheme()

  return (
    <div className="flex cursor-pointer">
      <Sun onClick={() => setTheme("dark")} className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon onClick={() => setTheme("light")} className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  )
}