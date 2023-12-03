export default function Editer() {
    return (
        <>
            <div class="editer"
                 contentEditable={true}
                 onInput={(e) => {
                     if (e.target.children.length <= 0) {
                         e.target.innerHTML = `<p class="code-line"><br/></p>`
                     }
                 }}>
                <p class="code-line"><br/></p>
            </div>
        </>
    )
}