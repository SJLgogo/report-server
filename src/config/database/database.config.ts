import { ConfigModule, ConfigService } from '@nestjs/config';
import { loadConfig } from '../configurations';
import { TypeOrmModule } from '@nestjs/typeorm';

const libModules=[
    ConfigModule.forRoot({
      load: [loadConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService):any => {
        const { host, port, username, password, database } =
          configService.get('mysql')
        return {
          type: 'mysql',
          host,
          port,
          username,
          password,
          database,
          autoLoadEntities: true,  
          synchronize:true  
        };
      },
    }),
  ]


  export {
    libModules
  }
  