const React = require('react')
const Default = require('./layouts/default')

function error404() {
    return (
        <Default>
            <main>
                <img src="/images/breadError404.jpeg" alt="Bread Error404"/>
            </main>
            
        </Default>
    )
}

module.exports = error404