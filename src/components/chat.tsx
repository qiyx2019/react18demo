import * as React from 'react'
import { useState } from 'react'
import { messageService } from '@/services/message.service'
interface ChatProps {
  userId?: number
  handleMessage?: Function
}
export default function Chat(props: ChatProps): JSX.Element {
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  const msgBody = messageService.onMessage().subscribe((x) => {
    let message = []
    if (x.userId !== props.userId) {
      message.push(x)
      console.log(x, 'x')
      setMessages((x) => [...x, ...message])
    }
  })
  console.log(value, props.userId)
  return (
    <div>
      {messages.map((item) => (
        <div key={Math.random()}>{item.msg + '----' + item.userId}</div>
      ))}
      <div>
        <input
          type="text"
          placeholder="请输入"
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            messageService.sendMessage({ msg: value, userId: props.userId })
            setValue('')
          }}
        >
          submit
        </button>
      </div>
    </div>
  )
}
