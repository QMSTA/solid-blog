import {DragDropSensors, DragDropProvider, createDraggable, createDroppable, useDragDropContext} from "@thisbeyond/solid-dnd";

function DragEvent(props) {
    const [, {onDragEnd}] = useDragDropContext();
    onDragEnd(({draggable, droppable}) => {
        console.log(draggable, droppable)
        if (droppable) {
            if (droppable.id === 'selected-tags' && droppable.node.children.length >= 4) {
                return
            }
            droppable.node.appendChild(draggable.node)
        }
    });
    return props.children
}

export function Dnd(props) {
    return (
        <div class={props.class}>
            <DragDropProvider>
                <DragDropSensors>
                    <DragEvent>
                        {props.children}
                    </DragEvent>
                </DragDropSensors>
            </DragDropProvider>
        </div>
    )
}


export function DragBox(props) {
    const draggable = createDraggable(props.id);
    return (<>
        <div use:draggable {...props}></div>
    </>)
}

export function DropBox(props) {
    const droppable = createDroppable(props.id);
    return (<>
        <div use:droppable {...props}></div>
    </>)
}