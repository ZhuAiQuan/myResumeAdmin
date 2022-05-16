import React, { useState } from "react";
import LoginForm from "./form";

export default function FormData() {
  const [ loginState, updateLoginState ] = useState(false)
  return (
    <div className="form-data">
      <div className="title">后台管理系统</div>
      <div className="form-ctx">
        {
          loginState 
          ? ''
          : <LoginForm />
        }
      </div>
    </div>
  );
}

