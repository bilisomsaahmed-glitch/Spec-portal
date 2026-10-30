import { User, Membership, Event, Announcement, Notification, Project, Resource, Contest, Training, Score } from '../models/index.js';
import { wrap } from './authController.js';
const divisions=['Development','Competitive Programming','Capacity Building'];
const safe=u=>({id:u._id,name:u.name,email:u.email,role:u.role,division:u.division,studentId:u.studentId});
export const getCapacityTrainings = wrap(async(req,res)=>res.json(await Training.find({division:'Capacity Building'}).sort({date:1})));
export const postCapacityTrainings = wrap(async(req,res)=>res.status(201).json(await Training.create({...req.body,division:'Capacity Building',createdBy:req.user._id})));
export const postCapacityTrainingsIdEnroll = wrap(async(req,res)=>res.json(await Training.findByIdAndUpdate(req.params.id,{$addToSet:{attendance:req.user._id}},{new:true})));
export const postCapacityTrainingsIdAttendance = wrap(async(req,res)=>{const training=await Training.findById(req.params.id);if(!training)return res.status(404).json({message:'Training not found.'});if(req.user.role==='division_leader'&&req.user.division!==training.division)return res.status(403).json({message:'You do not manage this division.'});training.attendance.addToSet(req.body.userId);await training.save();res.json(training)});
