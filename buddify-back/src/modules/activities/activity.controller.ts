import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateActivityDto } from "./dtos/CreateActivity.dto";
import { ActivityService } from "./activity.service";
import { SearchActivitiesDto } from "./dtos/SearchActivitiesDto.dto";

@Controller('activities')

export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get('search')
  searchActivities(@Query() query: SearchActivitiesDto) {
    return this.activityService.searchActivities(query);
  }


  @Post()
  async create(@Body() createActivityDto: CreateActivityDto): Promise<{message:string}> {
    return this.activityService.create(createActivityDto);
  }

}