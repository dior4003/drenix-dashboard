import React from 'react'
import img1 from "../../images/C50DOzRhJ5sQ.jpg"
import Card from './ui/Card'

export default function Section9() {
    const data = [
        {
            content: {
                img: true,
                link: img1
            },
            author: "Techmax",
            comment: [],
            title: "IT Leaders: Are You Ready for These 8 Challenges?",
            decr: "In order to write the perfect blog post, you need to break your content up into paragraphs....",
            link: "",

        },
        {
            content: {
                img: true,
                link: img1
            },
            author: "Techmax",
            comment: [],
            title: "IT Leaders: Are You Ready for These 8 Challenges?",
            decr: "In order to write the perfect blog post, you need to break your content up into paragraphs....",
            link: "",

        },
        {
            content: {
                img: true,
                link: img1
            },
            author: "Techmax",
            comment: [],
            title: "IT Leaders: Are You Ready for These 8 Challenges?",
            decr: "In order to write the perfect blog post, you need to break your content up into paragraphs....",
            link: "",

        },
    ]
    return (
        <section className='section_9'>
            <div className="row">
                <div className="title">
                    <p>NEWS {"&"} BLOG</p>
                </div>
                <div className="title_two">
                    <h3>Trending article {"&"} stories</h3>
                </div>
                <Card data={data}/>
            </div>
        </section>
    )
}
