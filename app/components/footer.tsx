import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"

const footerLinks = [
  { title: "About", href: "/about" },
  { title: "Speakers", href: "/speakers" },
  { title: "Schedule", href: "/schedule" },
  { title: "Sponsors", href: "/sponsors" },
  { title: "Venue", href: "/venue" },
  { title: "FAQ", href: "/faq" },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/futuredigitech" },
  { icon: Twitter, href: "https://twitter.com/futuredigitech" },
  { icon: Linkedin, href: "https://linkedin.com/company/futuredigitech" },
  { icon: Instagram, href: "https://instagram.com/futuredigitech" },
]

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Future DigiTech Summit 2025</h2>
            <p className="text-blue-200 mb-4">Empowering Innovation & Transforming the Digital Frontier</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition duration-150"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.icon.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition duration-150">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-200" />
                <a
                  href="mailto:info@futuredigitech.com"
                  className="text-blue-200 hover:text-white transition duration-150"
                >
                  info@futuredigitech.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-200" />
                <a href="tel:+60123456789" className="text-blue-200 hover:text-white transition duration-150">
                  +60 12-345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} Future DigiTech Summit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

