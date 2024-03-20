import { roleCheck } from "@/service/worker";
import EditProfileRecruiter from "./recruiter";
import EditProfileWorker from "./worker";
import React from 'react'

const Edit = async () => {
    const role = await roleCheck()
  return (
    <div>
        {role === "recruiter" ? <EditProfileRecruiter/> : <EditProfileWorker/>}
    </div>
  )
}

export default Edit