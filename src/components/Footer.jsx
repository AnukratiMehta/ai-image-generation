import React from 'react'

const Footer = () => {
    return (
        <section className='bg-white py-2 border-t border-t-[#e6ebf4]'>
            <p className='text-center text-[#666e75] text-sm'>
                Built with <span className="heart" style={{ color: "#FF10F0" }}>&#10084;</span> by Anukrati Mehta
            </p>
            <div className="text-center text-[#666e75]">
                <a target="_blank" rel="noreferrer" href='https://github.com/AnukratiMehta/ai-image-generation.git' className="text-sm hover:text-[#FF10F0]">Source code</a>
            </div>
        </section>
    )
}

export default Footer