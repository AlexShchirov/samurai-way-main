import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./message/Message";

export const Dialogs = () => {
    let dialogs = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" },
    ];
    let messages = [
        { id: 1, messages: "Hi" },
        { id: 2, messages: "How are you" },
        { id: 3, messages: "yoy" },
    ];

    let dialogsElements = dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} />
    ));

    let messageElements = messages.map((m) => <Message message={m.messages} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messageElements}</div>
        </div>
    );
};
