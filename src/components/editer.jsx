export default function Editer() {
    return (
        <div id="edit"
             class="editer text-gray-600 border"
             contentEditable={true}
             onInput={(e) => {
                 if (e.target.children.length <= 0) {
                     e.target.innerHTML = `<p class="code-line"><br/></p>`
                 }
             }}>
            <p class="code-line"><br/></p>
        </div>
    )
}