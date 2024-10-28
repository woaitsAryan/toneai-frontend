import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "./ui/button"

export default function Footer() {
  return <footer className="bottom-0 right-0 h-12 flex flex-row items-center justify-center font-geist text-base" id="footer">
    <div>Made with ❤️ by <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-base px-1">Disha Goyal</Button>
      </HoverCardTrigger>
      <HoverCardContent className="bg-white/60">
        Check out my <a href="https://github.com/disgoy" className="underline text-blue-500" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/dishagoyal15/" className="underline text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
      </HoverCardContent>
    </HoverCard> and
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-base px-1">Aryan Bharti</Button>
        </HoverCardTrigger>        
        <HoverCardContent className="bg-white/60">
          Check out my <a href="https://github.com/woaitsAryan" className="underline text-blue-500" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/aryanbharti/" className="underline text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </HoverCardContent>
      </HoverCard></div>
  </footer>
}