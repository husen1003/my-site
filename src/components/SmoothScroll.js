import React, { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

const SmoothScroll = () => {
    const options = {
        damping: 0.07,
        plugins: {
            overscroll: {
                effect: 'bounce',
                damping: '0.15',
                maxOverscroll: 150
            }
        }
    }
    useEffect(() => {
        Scrollbar.use(OverscrollPlugin)
        Scrollbar.init(document.body, options)
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default SmoothScroll
