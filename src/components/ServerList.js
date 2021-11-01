import React from 'react'

export default function ServerList({items}) {
    return (
        <div>
           { items.map(item => {
                return <div>item</div>
            })}
        </div>
    )
}
