



module.exports={
    
    server_port:3000,
    db_url:'mongodb://localhost:27017/local',
    
    db_schemas:[
        {file:'./user_schema',collection:'users6',schemaName:'UserSchema',modelName:'UserModel'}
        
    ],
    
    // 라우팅 정보를 여기에 등록해두면 별도의 모듈파일에 분리되어 있는 사용자 기능들을 사용자 요청으로 라우팅하여 사용가능.
    
    route_info:[
        
        
    ],
    facebook:{
        clientID:'1001555896851292',
        clientSecret:'c29089c5c9f503027dc354ed212bfa09',
        callbackURL:'/auth/facebook/callback'
    }
    
  
}