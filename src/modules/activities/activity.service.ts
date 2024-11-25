import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from '../activities/dtos/CreateActivity.dto';
import { ActivityRepository } from '../activities/activity.repository';
import { SearchActivitiesDto } from '../activities/dtos/SearchActivitiesDto.dto';
import { Activity } from '../activities/activity.entity';

@Injectable()
export class ActivityService {
  async create(
    createActivityDto: CreateActivityDto,
  ): Promise<{ message: string }> {
    return this.activityRepository.create(createActivityDto);
  }

  async searchActivities(
    query: SearchActivitiesDto,
  ): Promise<{ data: any[]; total: number }> {
    return this.activityRepository.searchActivities(query);
  }

  async joinActivity(
    activityId: string,
    userId: string,
  ): Promise<{ message: string }> {
    return this.activityRepository.joinActivity(activityId, userId);
  }
  async cancellActivity(
    activityId: string,
    userId: string,
  ): Promise<{ message: string }> {
    return this.activityRepository.cancellActivity(activityId, userId);
  }

  async getUserActivities(
    userId: string,
  ): Promise<{ created: Activity[]; joined: Activity[] }> {
    return this.activityRepository.getUserActivities(userId);
  }
  constructor(private readonly activityRepository: ActivityRepository) {}
}
