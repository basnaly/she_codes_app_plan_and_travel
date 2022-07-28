import React, { useState, useEffect } from 'react';

const CommentViewItem = ({ comment = ''}) => {

    const [isLink, setIsLink] = useState(comment.includes("http"));
    const [textArr, setTextArr] = useState([]);

    useEffect(() => {

        if (comment.includes("http")) {
            setIsLink(true)

            const firstIndex = comment.indexOf("http");

            let linkEnd = comment.indexOf(" ", firstIndex);
            if (linkEnd === -1) linkEnd = comment.length;

            const firstTextSection = comment.slice(0, firstIndex);
            const linkSection = comment.slice(firstIndex, linkEnd + 1);
            const secondTextSection = comment.slice(linkEnd + 1) ?? '';

            setTextArr([firstTextSection, linkSection, secondTextSection]);

        } else {
            setIsLink(false)
        }
    }, [])

    if (isLink) {
        return (
            <div>
                <span>{textArr[0]}</span>
                <a className='px-3'
                    href={textArr[1]}
                    target="_blank" >
                    {textArr[1]}
                </a>
                <span>{textArr[2]}</span>
            </div>
        )
    }

     return (
        <div>
            {comment}
        </div>
      
    )
}

export default CommentViewItem;
