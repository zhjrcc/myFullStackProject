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

# commit提交信息

[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]
在使用 `commitlint` 时，这些前缀（如 `build`、`chore` 等）是用来规范 Git 提交信息的，它们能够清晰地表明本次提交的主要目的和类型。下面为你详细解释每个前缀对应的提交场景：

### 1. `build`

- **含义**：与项目构建系统相关的更改，例如构建工具、依赖管理、打包配置等方面的修改。
- **场景示例**
  - 更新 `webpack` 配置文件以优化打包速度。
  - 升级 `npm` 依赖版本。
  - 修改 `gulp` 构建脚本。

### 2. `chore`

- **含义**：日常杂务类的更改，不涉及代码逻辑的修改，通常是项目配置、工具脚本等方面的调整。
- **场景示例**
  - 更新 `.gitignore` 文件，排除某些不必要的文件。
  - 修改 `package.json` 中的脚本命令。
  - 调整开发环境的配置文件。

### 3. `ci`

- **含义**：与持续集成（CI）系统相关的更改，例如 CI 配置文件、自动化脚本等的修改。
- **场景示例**
  - 更改 `.github/workflows` 下的 GitHub Actions 配置文件。
  - 调整 GitLab CI/CD 的 `.gitlab-ci.yml` 文件。
  - 修改 Jenkins 的构建脚本。

### 4. `docs`

- **含义**：仅涉及文档方面的更改，包括项目文档、代码注释等的更新。
- **场景示例**
  - 编写或更新 README.md 文件。
  - 添加或修改代码中的注释。
  - 完善项目的 API 文档。

### 5. `feat`

- **含义**：引入新功能的提交，意味着代码库增加了新的特性或功能模块。
- **场景示例**
  - 在电商网站中添加购物车功能。
  - 为博客系统增加评论功能。
  - 在游戏中添加新的关卡。

### 6. `fix`

- **含义**：修复代码中的 bug，解决程序运行时出现的问题。
- **场景示例**
  - 修复登录页面输入错误密码后提示信息不显示的问题。
  - 解决数据库查询时出现的 SQL 注入漏洞。
  - 修正页面布局在某些浏览器中显示错乱的问题。

### 7. `perf`

- **含义**：对代码进行性能优化，提升程序的运行速度、响应时间或资源利用率。
- **场景示例**
  - 优化算法以减少计算时间。
  - 压缩图片资源以减小页面加载时间。
  - 缓存频繁访问的数据以提高查询效率。

### 8. `refactor`

- **含义**：对代码进行重构，即不改变代码的外部功能，但对内部结构进行优化，使其更易于维护和扩展。
- **场景示例**
  - 将一个大的函数拆分成多个小的函数。
  - 调整类的继承关系以提高代码的可复用性。
  - 优化代码的架构设计。

### 9. `revert`

- **含义**：撤销之前的提交，将代码库恢复到之前的某个状态。
- **场景示例**
  - 发现之前的某个提交引入了严重的 bug，需要撤销该提交。
  - 回滚到上一个稳定版本。

### 10. `style`

- **含义**：仅涉及代码风格的更改，不影响代码的逻辑功能，例如代码缩进、空格、分号等的调整。
- **场景示例**
  - 使用代码格式化工具（如 Prettier）统一代码的缩进风格。
  - 调整代码中的空格和换行符。
  - 规范变量命名和注释格式。

### 11. `test`

- **含义**：与测试相关的更改，包括添加、修改或删除测试用例。
- **场景示例**
  - 为新功能编写单元测试用例。
  - 修改现有的集成测试脚本。
  - 删除不再需要的测试代码。

通过使用这些规范的提交前缀，可以使团队成员更清晰地了解每次提交的目的和影响，提高代码管理和协作的效率。
