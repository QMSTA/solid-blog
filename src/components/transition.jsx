import {Transition} from "solid-transition-group";

export default function TransitionBox(props) {
    return (
        <>
            <Transition
                mode="outin"
                onBeforeEnter={(el) => {
                    if (el instanceof HTMLElement) el.style.opacity = '0';
                }}
                onEnter={(el, done) => {
                    el.animate(
                        [
                            {opacity: 0, transform: 'translate(-10px)'},
                            {opacity: 1, transform: 'translate(0)'},
                        ],
                        {duration: 100, fill: 'both'}
                    )
                        .finished.then(done)
                        .catch(done);
                }}
                onExit={(el, done) => {
                    el.animate(
                        [
                            {opacity: 1, transform: `translate(0)`},
                            {opacity: 0, transform: 'translate(10px)'},
                        ],
                        {duration: 100}
                    )
                        .finished.then(done)
                        .catch(done);
                }}
            >
                {props.children}
            </Transition>
        </>
    )
}