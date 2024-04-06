'use strict'

const { SuccessResponse } = require('../core/success.response')
const UserService = require('../services/user.service')

class UserController {
    getAll = async (req, res, next) => {
        new SuccessResponse({
            message: 'Login successfully',
            metadata: await UserService.getAll()
        }).send(res)
    }

    login = async (req, res, next) => {
        new SuccessResponse({
            message: 'Login successfully',
            metadata: await UserService.login(req.body)
        }).send(res)
    }

    register = async (req, res, next) => {
        new SuccessResponse({
            message: 'Register successfully',
            metadata: await UserService.register(req.body)
        }).send(res)
    }

    updateFavoriteSong = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update favorite list successfully',
            metadata: await UserService.updateFavoriteSong(req.body)
        }).send(res)
    }

    sendMail = async (req, res, next) => {
        new SuccessResponse({
            message: 'Send mail successfully',
            metadata: await UserService.sendMail(req.body)
        }).send(res)
    }

    updatePassword = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update password successfully',
            metadata: await UserService.updatePassword(req.body)
        }).send(res)
    }

    emailExist = async (req, res, next) => {
        new SuccessResponse({
            message: 'Check email exist',
            metadata: await UserService.emailExist(req.body)
        }).send(res)
    }
}

module.exports = new UserController()