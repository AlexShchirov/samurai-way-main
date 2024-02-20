import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./message/Message";

export const Dialogs = (props: any) => {
    let dialogsElements = props.state.dialogs.map((d: any) => (
        <DialogItem name={d.name} id={d.id} />
    ));

    let messageElements = props.state.messages.map((m: any) => (
        <Message message={m.messages} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messageElements}</div>
        </div>
    );
};
