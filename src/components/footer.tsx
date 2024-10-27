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
      <HoverCardContent>
        github.com/wopdkas
      </HoverCardContent>
    </HoverCard> and
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-base px-1">Aryan Bharti</Button>
        </HoverCardTrigger>        
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard></div>
  </footer>
}