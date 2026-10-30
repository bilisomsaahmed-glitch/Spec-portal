import { User, Membership, Event, Announcement, Notification, Project, Resource, Contest, Training, Score } from '../models/index.js';
import { wrap } from './authController.js';
const divisions=['Development','Competitive Programming','Capacity Building'];
const safe=u=>({id:u._id,name:u.name,email:u.email,role:u.role,division:u.division,studentId:u.studentId});
export const getUsers = wrap(async(req,res)=>{const q={};if(req.user.role==='division_leader')q.division=req.user.division;if(req.query.search)q.$or=[{name:new RegExp(req.query.search,'i')},{email:new RegExp(req.query.search,'i')}];res.json((await User.find(q).select('-password').sort({name:1})).map(safe))});
export const patchUsersId = wrap(async(req,res)=>{const allowed={};for(const k of ['role','division','active'])if(req.body[k]!==undefined)allowed[k]=req.body[k];res.json(safe(await User.findByIdAndUpdate(req.params.id,allowed,{new:true,runValidators:true})))});
