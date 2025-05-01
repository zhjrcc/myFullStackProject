# FullStack

# mongodb数据库字符串：

mongodb+srv://zjrhello:MIYn2klyTk2ERgOd@blog.lihyk.mongodb.net/myBlog?retryWrites=true&w=majority

# 停止所有正在运行的容器

docker stop $(docker ps -aq)

# 删除所有容器

docker rm $(docker ps -aq)

# 直接删除所有容器

docker rm $(docker ps -aq)

# 部署docker镜像到docker仓库中

## 后端

cd backend/
docker build --platform linux/amd64 -t blog-backend .
docker tag blog-backend zhjrcc/blog-backend
docker push zhjrcc/blog-backend

# 服务器部署后端

docker run -d -e PORT=3000 -e "DATABASE_URL=mongodb+srv://zjrhello:MIYn2klyTk2ERgOd@blog.lihyk.mongodb.net/myblog?retryWrites=true&w=majority" -p 3000:3000 zhjrcc/blog-backend

## 前端

docker build --platform linux/amd64 --build-arg "VITE_BACKEND_URL=http://8.138.180.252:3000/api/v1" -t blog-frontend .
docker tag blog-frontend zhjrcc/blog-frontend
docker push zhjrcc/blog-frontend

# 服务器部署前端

docker run -d -p 80:80 zhjrcc/blog-frontend

# 删除悬空镜像

docker image prune -f

# 给镜像打标签

docker build --tag（-t）：在构建新镜像的过程中为其指定名称和标签。
docker tag：为已经存在的镜像创建新的名称和标签，不会创建新的镜像层，仅仅是多了一个指向同一镜像层的引用
