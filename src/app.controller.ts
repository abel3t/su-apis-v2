import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';
import { AppService } from './app.service';

export const CriteriaType = {
  GoodStudy: 'GoodStudy',
  PlayHard: 'PlayHard',
  EatWellSleepWell: 'EatWellSleepWell',
  Skillfully: 'Skillfully',
  Humorous: 'Humorous',
  NiceWords: 'NiceWords',
  GoodDiscipline: 'GoodDiscipline',
  Serve: 'Serve',
  BeautifulSingOrDancing: 'BeautifulSingOrDancing',
  Sociable: 'Sociable'
};

export class CreateVoteDto {
  @ApiProperty({
    example: 'Laptop HP',
    description: 'The name of category'
  })
  @IsString()
  @IsIn(Object.values(CriteriaType))
  type: string;
}

@Controller()
@ApiTags('Root')
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Root'
  })
  getRoot(): unknown {
    return { status: 'OK' };
  }

  @Post('api/classrooms/:classroomId/students/:studentId/vote/:vote')
  @ApiResponse({
    status: 201,
    description: 'Vote'
  })
  voteStudent(
    @Param('classroomId') classroomId: string,
    @Param('studentId') studentId: string,
    @Param('studentId') vote: string
  ): unknown {
    return this.appService.voteStudent({
      type: vote,
      classroomId,
      studentId
    });
  }
}
