import React from "react"
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        Dimych
                    </div>
                    <div className={s.dialog}>
                        Andrew
                    </div>
                    <div className={s.dialog}>
                        Sveta
                    </div>
                    <div className={s.dialog}>
                        Sasha
                    </div>
                    <div className={s.dialog}>
                        Victor
                    </div>
                    <div className={s.dialog}>
                        Valera
                    </div>
                </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">How are you</div>
                <div className="message">yoy</div>
            </div>
        </div>
    )
}