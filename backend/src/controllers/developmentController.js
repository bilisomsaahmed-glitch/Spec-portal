import { User, Membership, Event, Announcement, Notification, Project, Resource, Contest, Training, Score } from '../models/index.js';
import { wrap } from './authController.js';
const divisions=['Development','Competitive Programming','Capacity Building'];
const safe=u=>({id:u._id,name:u.name,email:u.email,role:u.role,division:u.division,studentId:u.studentId});
export const getDevelopmentProjects = wrap(async(req,res)=>res.json(await Project.find().populate('members','name').populate('tasks.assignee','name')));
export const postDevelopmentProjects = wrap(async(req,res)=>res.status(201).json(await Project.create({...req.body,division:'Development'})));
export const patchDevelopmentProjectsId = wrap(async(req,res)=>{const p=await Project.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});if(!p)return res.status(404).json({message:'Project not found.'});res.json(p)});
export const postDevelopmentProjectsIdTasks = wrap(async(req,res)=>{if(!req.body.title)return res.status(400).json({message:'Task title is required.'});const p=await Project.findByIdAndUpdate(req.params.id,{$push:{tasks:{title:req.body.title,assignee:req.body.assignee||req.user._id,dueDate:req.body.dueDate}}},{new:true});if(!p)return res.status(404).json({message:'Project not found.'});res.json(p)});
