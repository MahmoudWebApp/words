import { motion } from "framer-motion"
import { useRef } from "react"

export function Component() {
    const scrollRef = useRef(null)
    
    return (
      <div ref={scrollRef} style={{ overflow: "scroll" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        />
    
      </div>
    )
  }