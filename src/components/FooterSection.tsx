
import { Heart } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          
          <p className="flex items-center text-sm text-muted-foreground">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
