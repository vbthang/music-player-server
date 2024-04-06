'use strict';

const { getUserByEmail } = require('../models/repo/user.repo');
const { NotFoundError, BadRequestError } = require('../core/error.response');
const userModel = require('../models/user.model');
const nodemailer = require('nodemailer');

class UserService {
    static login = async ({ email, password }) => {
        const foundUser = await getUserByEmail({ email });

        if (!foundUser) throw new NotFoundError('Do not find user');

        if (password !== foundUser.password) throw new BadRequestError('Wrong password');

        const payload = {
            email: email,
            name: foundUser.name,
            playlists: foundUser.playlists
        };

        return payload;
    };

    static register = async ({ name, email, password }) => {
        const index = await userModel.countDocuments();

        const foundUser = await getUserByEmail({ email });

        if (foundUser) throw new BadRequestError('User has already exits');

        userModel.create({
            id: "User" + index,
            name: name,
            email: email,
            password: password,
            playlists: []
        });

        return {
            email: email,
            name: name,
            playlists: [],
        };
    };

    static updateFavoriteSong = async ({ email, songId, action }) => {
        const foundUser = await getUserByEmail({ email });

        if (!foundUser) {
            throw new NotFoundError('User not found');
        }

        if (action === "add") {
            if (!foundUser.playlists.includes(songId)) {
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
    };

    static sendMail = async ({ email, code }) => {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'vbthang1682003@gmail.com',
                pass: 'nzkr ofnk bnsv jmvd'
            }
        });

        // Tạo thông điệp email
        const message = `
            Xin chào,

            Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Dưới đây là mã xác nhận để đặt lại mật khẩu:

            Mã xác nhận: ${code}

            Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.

            Trân trọng,
            Đội ngũ hỗ trợ của chúng tôi
        `;

        await transporter.sendMail({
            from: 'SOULSOUND <vbthang1682003@gmail.com>',
            to: email,
            subject: "FORGOT PASSWORD",
            text: message,
        });

        return 'Email sent successfully';
    };

    static updatePassword = async ({ email, password }) => {
        const foundUser = await getUserByEmail({ email });

        if (!foundUser) {
            throw new NotFoundError('User not found');
        }

        foundUser.password = password;

        await userModel.findOneAndUpdate(
            { email: email },
            { password: password },
            { new: true }
        );

        return {
            email: email,
            name: foundUser.name,
            playlists: foundUser.playlists
        };
    }
}

module.exports = UserService;
