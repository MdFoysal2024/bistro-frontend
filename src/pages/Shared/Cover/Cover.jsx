import React from 'react'
import { Parallax } from 'react-parallax'

const Cover = ({ img, title, details }) => {

    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero h-60 md:h-144 lg:h-180">
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl md:text-5xl uppercase font-bold">{title}</h1>
                            <p className="mb-5 text-lg">
                                {details}
                            </p>

                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Cover
