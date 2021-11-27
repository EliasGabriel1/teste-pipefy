import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import "./styles.css";


const SignupSchema = yup.object().shape({
  Name: yup.string().required().matches(/^[0-9]+$/, "Must be only digits"),
  skill: yup.string().required()
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const date_create=  moment().format("YYYY-MM-DD")
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Your Name</label>
        <input type="text" {...register("Name")} />
        {errors.firstName && <p>{errors.Name.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Your Bio</label>
        <textarea className="bio" type="text" {...register("bio")} />
        {errors.lastName && <p>{errors.bio.message}</p>}
      </div>
      <div>
        <label>Primary Skill</label>
        <input type="text" {...register("skill")} />
        {errors.age && <p>{errors.skill.message}</p>}
      </div>
      <div>
        <label>Java Script library of choice</label>
        <div className="groupradio" >
          <input id="react" name="'jsLibrary'" type="radio" {...register("jsLibrary")}/>
          <label htmlFor="react">React</label>
        </div>
        <div className="groupradio" >
          <input id="angular" name="jsLibrary" type="radio" {...register("jsLibrary")} />
          <label htmlFor="angular">Angular</label>
        </div>
        <div className="groupradio" >
          <input id="vue" name="jsLibrary" type="radio" {...register("jsLibrary")}/>
          <label htmlFor="vue">Vue</label>
        </div>
      </div>
      <div>
        <label>Additional Experience</label>
        <div className="groupradio" >
          <input id="tdd" type="checkbox" {...register("tdd")}/>
          <label htmlFor="tdd">TDD</label>
        </div>
        <div className="groupradio" >
          <input id="heroku" type="checkbox" {...register("heroku")}/>
          <label htmlFor="heroku">Heroku</label>
        </div>
        <div className="groupradio" >
          <input id="github" type="checkbox" {...register("github")}/>
          <label htmlFor="github">Github</label>
        </div>
      </div>
      <label>Start Date</label>
      <input id="data" type="date" value={date_create} {...register("date")}/>
      <input className="input" type="submit" />
    </form>
  );
}