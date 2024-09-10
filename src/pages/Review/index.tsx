import { SubmitHandler, useForm } from "react-hook-form";
import "./style.css"

 type FormType = {
    user_name: string ,
    user_email : string
    category :string


 }
const Review = () =>{
    const {register , handleSubmit , formState : {errors}} = useForm<FormType>();

    const onSubmit: SubmitHandler<FormType> = (data) =>{
        console.log(data);

    };
    return(
        <div className="form__content">
            <h1>привет </h1>
             <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label>
                name
                <br />
                 <input type="text" {...register("user_name" , {required :{
                    value : true ,
                    message : "обязательное "
                 } , minLength: {
                    value : 3 , 
                    message : "поле с именем недостаточно символов", 
                }})}/>
            </label>
            {errors.user_name && <p>{errors.user_name.message}</p>}
            <label>
                email 
                <br />
                <input type="email"{...register("user_email")} />
            </label>
            <select {...register("category")}>
                <option value="a">Select A</option>
               < option value="b">Select b</option>
                <option value="c">Select c</option>
            </select>

            <input type="submit" />
        </form>
        </div>
       
    );
};

export default Review;








// const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
    //     event.preventDefault();

    //     const form = new FormData(event.currentTarget);
    //     const data = Object.fromEntries(form);


    //     const postData = async () =>{
    //         const req = await fetch (`https://jsonplaceholder.typicode.com/todos` , {
    //             method :"POST" , 
    //             body : JSON.stringify(data) , 
    //         });
    //         const answer = await req.json();
    //         console.log(answer)
    //     };
    //     postData();
    //     console.log(data);

    // }