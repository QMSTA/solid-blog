import toast from 'solid-toast';

const notify = () => toast('Here is your toast.');

export default function () {
    return (
        <>
            <div>
                <button onClick={notify}>TEST</button>
            </div>
        </>
    )
}