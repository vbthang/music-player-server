'use strict'
const { 
	getUserByEmail
} = require('../models/repo/user.repo')

const {
    NotFoundError,
    BadRequestError
} = require('../core/error.response');
const userModel = require('../models/user.model');

class SongService {

	static login = async ({ email, password }) => {
		const foundUser = await getUserByEmail({ email })

        if(!foundUser) throw new NotFoundError('Do not find user')

        if(password !== foundUser.password) throw new BadRequestError('Wrong password')
		
		const payload = {
            email: email,
            name: foundUser.name,
            playlists: foundUser.playlists
        }

		return payload
	}

    static register = async({ name, email, password }) => {
        const index = await userModel.countDocuments()

        const foundUser = await getUserByEmail({ email })
        console.log(foundUser);

        if(foundUser) throw new BadRequestError('User has already exits')

        userModel.create({
            id: "User" + index,
            name: name,
            email: email,
            password: password,
            playlists: []
        })


        return {
            email: email,
            name: name,
            playlists: [],
        }
    }

    static updateFavoriteSong = async({ email, songId, action }) => {
        const foundUser = await getUserByEmail({ email });
    
        if (!foundUser) {
            throw new NotFoundError('User not found');
        }
    
        if (action === "add") {
            // Kiểm tra xem bài hát đã tồn tại trong danh sách yêu thích hay chưa
            if (!foundUser.playlists.includes(songId)) {
                // Nếu chưa tồn tại, thêm bài hát vào danh sách yêu thích
                foundUser.playlists.push(songId);
            }
        } else if (action === "remove") {
            foundUser.playlists = foundUser.playlists.filter(song => song !== songId);
        } else {
            throw new BadRequestError('Invalid action');
        }
    
        await userModel.findOneAndUpdate(
            { email: email },
            { playlists: foundUser.playlists },
            { new: true }
        );
    
        return {
            email: email,
            name: foundUser.name,
            playlists: foundUser.playlists
        };
    }    
}

module.exports = SongService