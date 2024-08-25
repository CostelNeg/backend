import { Schema, model } from "mongoose";
const blogpostSchema = new Schema({
  category: { 
    type: String },
  title: {
    type: String,
  },
  cover:{
    type:String
  },
  readTime:{
    value:Number,
    unit:String
  },
  author:{
    email:String,
    content:String
  }
},{
    collection: "blogs"
}

);
 const Blog = model("Blog", blogpostSchema)
 export default Blog;