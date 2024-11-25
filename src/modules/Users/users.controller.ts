import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UpdateUserDto } from '../users/dtos/UpdateUser.dto';
import { UpdateUserPremiumStatusDto } from '../users/dtos/ChangeIsPremium';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(id, user);
  }
  @Patch(':id/premium-status')
  async updatePremiumStatus(
    @Param('id') id: string,
    @Body() updatePremiumStatusDto: UpdateUserPremiumStatusDto,
  ) {
    const result = await this.userService.updateUserPremiumStatus(
      id,
      updatePremiumStatusDto,
    );

    if (result.success) {
      return result;
    } else {
      throw new Error(result.message);
    }
  }
}
