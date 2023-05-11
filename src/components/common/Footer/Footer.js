import React from 'react'
import footerCss from  './Footer.module.css'

function Footer() {
  return (
    <footer className={footerCss.footer}>
        <div className={footerCss.leftSection}>
        <span className={footerCss.leftDetails}>
  Privacy Policy
</span>
        <span className={footerCss.leftDetails}>
  Privacy Policy
</span>
        <span className={footerCss.leftDetails}>
  Privacy Policy
</span>
        </div>

        <div className={footerCss.rightSection}>
  AlphametricX © 2023 . All rights reserved
        </div>
    </footer>
  )
}

export default Footer