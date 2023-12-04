import React from 'react'
import { SideBar } from "../../components"
import { LogoutBtn } from "../../components"
import { LivePlayer } from "../../components"
import { SendTipDialog } from "../../components"
import { ChatWindow } from "../../components"
import "../../styles/Listener/ListenerLive.css"

function ListenerLive() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=" ListBody relative h-screen overflow-y-auto overflow-x-hidden gradient-bg-welcome bg-scroll pt-2 pb-2.5">
      <SideBar />
      <div className="main overflow-x-hidden">
        <LogoutBtn />
        <div className=' main-components'>
          <div className='live-payer mr-3'><LivePlayer handleClickOpen={handleClickOpen} /></div>
          <div className='live-chat-window'><ChatWindow /></div>
        </div>

      </div>
      <SendTipDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />

    </div >
  )
}

export default ListenerLive