"use server"
import React from 'react'
import { roleCheck } from '@/service/worker'
import RecruiterNotification from './recruiter'
import WorkerNotification from './worker'
const Notificaion = async() => {
    const role =  await roleCheck()
  return (
    <div>
{role === "recruiter" ? <RecruiterNotification/> : <WorkerNotification />}
    </div>
  )
}

export default Notificaion