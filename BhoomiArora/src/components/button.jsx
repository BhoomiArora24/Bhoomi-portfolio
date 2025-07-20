/**
 * A reusable CTA button component.
 * - For internal links (e.g., "#projects"), it smoothly scrolls to the target section.
 * - For external links (e.g., "http://example.com"), it opens the link in a new tab.
 */

import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Button = ({ text, className, id, link }) => {
  const handleClick = (e) => {
    const isInternalLink = link?.startsWith('#')

    if (isInternalLink) {
      e.preventDefault()

      const targetId = link.slice(1) || id
      const target = document.getElementById(targetId)

      if (target) {
        const offset = window.innerHeight * 0.15
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    // No need to handle external links — browser will open them normally
  }

  return (
    <a
  href={link}
  onClick={handleClick}
  className={`${className ?? ''} cta-wrapper group`}
  id={id}
  target={link?.startsWith('http') ? '_blank' : undefined}
  rel={link?.startsWith('http') ? 'noopener noreferrer' : undefined}
>
  <div className="cta-button flex items-center justify-between w-44 h-12 px-3 py-2 rounded-md bg-white shadow-md relative overflow-hidden transition-transform duration-300 hover:scale-105">
    {/* Black dot that moves */}
    <div className="moving-dot absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black transition-all duration-500 group-hover:left-[calc(100%-2.5rem)]" ><FaChevronDown/>
    </div>

    {/* Text */}
    <p className="text-black text-sm font-semibold z-10 ml-6"> {text} </p>

    {/* Arrow */}
    <div className="arrow-wrapper z-10">
      <FaChevronDown className="text-sm transition-colors duration-500 group-hover:text-white" />
    </div>
  </div>
</a>

  )
}

export default Button
