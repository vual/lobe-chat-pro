#!/bin/bash

# ==================
# == Env settings ==
# ==================

# check operating system
# ref: https://github.com/lobehub/lobe-chat/pull/5247
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    SED_INPLACE_ARGS=('-i' '')
else
    # not macOS
    SED_INPLACE_ARGS=('-i')
fi

# ======================
# == Process the args ==
# ======================

# 1. Default values of arguments

# Arg: -l or --lang
# Determine the language to show, default is en

# Arg: --url
# Determine the source URL to download files
SOURCE_URL="https://raw.githubusercontent.com/lobehub/lobe-chat/main"

# Arg: --host
# Determine the server host
HOST=""

# 2. Parse script arguments
while getopts "l:-:" opt; do
    case $opt in
        l)
            LANGUAGE=$OPTARG
        ;;
        -)
            case "${OPTARG}" in
                lang)
                    LANGUAGE="${!OPTIND}"
                    OPTIND=$(($OPTIND + 1))
                ;;
                url)
                    SOURCE_URL="${!OPTIND}"
                    OPTIND=$(($OPTIND + 1))
                ;;
                host)
                    HOST="${!OPTIND}"
                    OPTIND=$(($OPTIND + 1))
                ;;
                *)
                    echo "Usage: $0 [-l language|--lang language] [--url source] [--host serverhost]" >&2
                    exit 1
                ;;
            esac
        ;;
        *)
            echo "Usage: $0 [-l language|--lang language] [--url source]" >&2
            exit 1
        ;;
    esac
done

#######################
## Helper Functions ##
#######################

# Supported languages and messages
# Arg: -l --lang
# If the language is not supported, default to English
# Function to show messages
show_message() {
    local key="$1"
    case $key in
        choose_language)
            echo "Please choose a language / 请选择语言:"
            echo "(0) English"
            echo "(1) 简体中文"
        ;;
        downloading)
            case $LANGUAGE in
                zh_CN)
                    echo "正在下载文件..."
                ;;
                *)
                    echo "Downloading files..."
                ;;
            esac
        ;;
        extracted_success)
            case $LANGUAGE in
                zh_CN)
                    echo " 解压成功到目录："
                ;;
                *)
                    echo " extracted successfully to directory: "
                ;;
            esac
        ;;
        extracted_failed)
            case $LANGUAGE in
                zh_CN)
                    echo " 解压失败。"
                ;;
                *)
                    echo " extraction failed."
                ;;
            esac
        ;;
        file_not_exists)
            case $LANGUAGE in
                zh_CN)
                    echo " 不存在。"
                ;;
                *)
                    echo " does not exist."
                ;;
            esac
        ;;
        security_secrect_regenerate)
            case $LANGUAGE in
                zh_CN)
                    echo "重新生成安全密钥..."
                ;;
                *)
                    echo "Regenerate security secrets..."
                ;;
            esac
        ;;
        security_secrect_regenerate_failed)
            case $LANGUAGE in
                zh_CN)
                    echo "无法重新生成安全密钥："
                ;;
                *)
                    echo "Failed to regenerate security secrets: "
                ;;
            esac
        ;;
        host_regenerate)
            case $LANGUAGE in
                zh_CN)
                    echo "✔️ 已更新部署模式配置"
                ;;
                *)
                    echo "✔️ Updated deployment mode configuration"
                ;;
            esac
        ;;
        host_regenerate_failed)
            case $LANGUAGE in
                zh_CN)
                    echo "无法重新生成服务器域名："
                ;;
                *)
                    echo "Failed to regenerate server host: "
                ;;
            esac
        ;;
        security_secrect_regenerate_report)
            case $LANGUAGE in
                zh_CN)
                    echo "安全密钥生成结果如下："
                ;;
                *)
                    echo "Security secret generation results are as follows:"
                ;;
            esac
        ;;
        tips_download_failed)
            case $LANGUAGE in
                zh_CN)
                    echo "$2 下载失败，请检查网络连接。"
                ;;
                *)
                    echo "$2 Download failed, please check the network connection."
                ;;
            esac
        ;;
        tips_already_installed)
            case $LANGUAGE in
                zh_CN)
                    echo "检测到您已经运行过 LobeChat Database，本安装程序只能完成初始化配置，并不能重复安装。如果你需要重新安装，请删除 data 和 s3_data 文件夹。"
                ;;
                *)
                    echo "It is detected that you have run LobeChat Database. This installation program can only complete the initialization configuration and cannot be reinstalled. If you need to reinstall, please delete the data and s3_data folders."
                ;;
            esac
        ;;
        tips_run_command)
            case $LANGUAGE in
                zh_CN)
                    echo "您已经完成了所有配置。请运行以下命令启动LobeChat："
                ;;
                *)
                    echo "You have completed all configurations. Please run this command to start LobeChat:"
                ;;
            esac
        ;;
        tips_show_documentation)
            case $LANGUAGE in
                zh_CN)
                    echo "完整的环境变量在'.env'中可以在文档中找到："
                ;;
                *)
                    echo "Full environment variables in the '.env' can be found at the documentation on "
                ;;
            esac
        ;;
        tips_show_documentation_url)
            case $LANGUAGE in
                zh_CN)
                    echo "https://lobehub.com/zh/docs/self-hosting/environment-variables"
                ;;
                *)
                    echo "https://lobehub.com/docs/self-hosting/environment-variables"
                ;;
            esac
        ;;
        tips_no_executable)
            case $LANGUAGE in
                zh_CN)
                    echo "没有找到，请先安装。"
                ;;
                *)
                    echo "not found, please install it first."
                ;;
            esac
        ;;
        tips_allow_ports)
            case $LANGUAGE in
                zh_CN)
                    echo "请确保服务器以下端口未被占用且能被访问：3210, 9000, 9001, 8000"
                ;;
                *)
                    echo "Please make sure the following ports on the server are not occupied and can be accessed: 3210, 9000, 9001, 8000"
                ;;
            esac
        ;;
        tips_auto_detected)
            case $LANGUAGE in
                zh_CN)
                    echo "已自动识别"
                ;;
                *)
                    echo "Auto-detected"
                ;;
            esac
        ;;
        tips_private_ip_detected)
            case $LANGUAGE in
                zh_CN)
                    echo "注意，当前识别到内网 IP，如果需要外部访问，请替换为公网 IP 地址"
                ;;
                *)
                    echo "Note that the current internal IP is detected. If you need external access, please replace it with the public IP address."
                ;;
            esac
        ;;
        tips_add_reverse_proxy)
            case $LANGUAGE in
                zh_CN)
                    echo "请在你的反向代理中完成域名到端口的映射："
                ;;
                *)
                    echo "Please complete the mapping of domain to port in your reverse proxy:"
                ;;
            esac
        ;;
        tips_no_docker_permission)
            case $LANGUAGE in
                zh_CN)
                    echo "WARN: 看起来当前用户没有 Docker 权限。"
                    echo "使用 'sudo usermod -aG docker $USER' 为用户分配 Docker 权限（可能需要重新启动 shell）。"
                ;;
                *)
                    echo "WARN: It look like the current user does not have Docker permissions."
                    echo "Use 'sudo usermod -aG docker $USER' to assign Docker permissions to the user (may require restarting shell)."
                ;;
            esac
        ;;
        tips_init_database_failed)
            case $LANGUAGE in
                zh_CN)
                    echo "无法初始化数据库，为了避免你的数据重复初始化，请在首次成功启动时运行以下指令清空 Casdoor 初始配置文件："
                    echo "echo '{}' > init_data.json"
                ;;
                *)
                    echo "Failed to initialize the database. To avoid your data being initialized repeatedly, run the following command to unmount the initial configuration file of Casdoor when you first start successfully:"
                    echo "echo '{}' > init_data.json"
                ;;
            esac
        ;;
        ask_regenerate_secrets)
            case $LANGUAGE in
                zh_CN)
                    echo "是否要重新生成安全密钥？"
                ;;
                *)
                    echo "Do you want to regenerate security secrets?"
                ;;
            esac
        ;;
        ask_deploy_mode)
            case $LANGUAGE in
                zh_CN)
                    echo "请选择部署模式："
                    echo "(0) 域名模式（访问时无需指明端口），需要使用反向代理服务 LobeChat, MinIO, Casdoor ，并分别分配一个域名；"
                    echo "(1) 端口模式（访问时需要指明端口，如使用IP访问，或域名+端口访问），需要放开指定端口；"
                    echo "(2) 本地模式（仅供本地测试使用）"
                    echo "如果你对这些内容疑惑，可以先选择使用本地模式进行部署，稍后根据文档指引再进行修改。"
                    echo "https://lobehub.com/docs/self-hosting/server-database/docker-compose"
                ;;
                *)
                    echo "Please select the deployment mode:"
                    echo "(0) Domain mode (no need to specify the port when accessing), you need to use the reverse proxy service LobeChat, MinIO, Casdoor, and assign a domain name respectively;"
                    echo "(1) Port mode (need to specify the port when accessing, such as using IP access, or domain name + port access), you need to open the specified port;"
                    echo "(2) Local mode (for local testing only)"
                    echo "If you are confused about these contents, you can choose to deploy in local mode first, and then modify according to the document guide later."
                    echo "https://lobehub.com/docs/self-hosting/server-database/docker-compose"
                ;;
            esac
        ;;
        ask_host)
            case $LANGUAGE in
                zh_CN)
                    echo " 部署IP/域名"
                ;;
                *)
                    echo " Deploy IP/Domain"
                ;;
            esac
        ;;
        ask_domain)
            case $LANGUAGE in
                zh_CN)
                    echo "服务的域名（例如 $2 ，不要包含协议前缀）："
                ;;
                *)
                    echo "The domain of the service (e.g. $2, do not include the protocol prefix):"
                ;;
            esac
        ;;
        ask_protocol)
            case $LANGUAGE in
                zh_CN)
                    echo "域名是否使用 https 协议？ (所有服务需要使用同一协议)"
                ;;
                *)
                    echo "Does the domain use the https protocol? (All services need to use the same protocol)"
                ;;
            esac
        ;;
        ask_init_database)
            case $LANGUAGE in
                zh_CN)
                    echo "是否初始化数据库？"
                ;;
                *)
                    echo "Do you want to initialize the database?"
                ;;
            esac
        ;;
    esac
}

# Function to download files
download_file() {
    wget --show-progress "$1" -O "$2"
    # If run failed, exit
    if [ $? -ne 0 ]; then
        show_message "tips_download_failed" "$2"
        exit 1
    fi
}

print_centered() {
    # Define colors
    declare -A colors
    colors=(
        [black]="\e[30m"
        [red]="\e[31m"
        [green]="\e[32m"
        [yellow]="\e[33m"
        [blue]="\e[34m"
        [magenta]="\e[35m"
        [cyan]="\e[36m"
        [white]="\e[37m"
        [reset]="\e[0m"
    )
    local text="$1"                                   # Get input texts
    local color="${2:-reset}"                         # Get color, default to reset
    local term_width=$(tput cols)                     # Get terminal width
    local text_length=${#text}                        # Get text length
    local padding=$(((term_width - text_length) / 2)) # Get padding
    # Check if the color is valid
    if [[ -z "${colors[$color]}" ]]; then
        echo "Invalid color specified. Available colors: ${!colors[@]}"
        return 1
    fi
    # Print the text with padding
    printf "%*s${colors[$color]}%s${colors[reset]}\n" $padding "" "$text"
}

# Usage:
# ```sh
#   ask "prompt" "default" "description"
#   echo $ask_result
# ```
#   "prompt" ["description" "default"]:
ask() {
    local prompt="$1"
    local default="$2"
    local description="$3"
    # Add a space after the description if it is not empty
    if [ -n "$description" ]; then
        description="$description "
    fi
    local result
    
    if [ -n "$default" ]; then
        read -p "$prompt [${description}${default}]: " result
        result=${result:-$default}
    else
        read -p "$prompt: " result
    fi
    # trim and assign to global variable
    ask_result=$(echo "$result" | xargs)
}

####################
## Main Process ##
####################

# ===============
# == Variables ==
# ===============
# File list
SUB_DIR="docker-compose/local"
FILES=(
    "$SUB_DIR/docker-compose.yml"
    "$SUB_DIR/init_data.json"
    "$SUB_DIR/searxng-settings.yml"
)
ENV_EXAMPLES=(
    "$SUB_DIR/.env.zh-CN.example"
    "$SUB_DIR/.env.example"
)
# Default values
CASDOOR_PASSWORD="123"
CASDOOR_SECRET="CASDOOR_SECRET"
MINIO_ROOT_PASSWORD="YOUR_MINIO_PASSWORD"
CASDOOR_HOST="localhost:8000"
MINIO_HOST="localhost:9000"
PROTOCOL="http"

# If no language is specified, ask the user to choose
if [ -z "$LANGUAGE" ]; then
    show_message "choose_language"
    ask "(0,1)" "0"
    case $ask_result in
        0)
            LANGUAGE="en_US"
        ;;
        1)
            LANGUAGE="zh_CN"
        ;;
        *)
            echo "Invalid language: $ask_result"
            exit 1
        ;;
    esac
fi

section_download_files(){
    # Download files asynchronously
    if ! command -v wget &> /dev/null ; then
        echo "wget" $(show_message "tips_no_executable")
        exit 1
    fi
    
    download_file "$SOURCE_URL/${FILES[0]}" "docker-compose.yml"
    download_file "$SOURCE_URL/${FILES[1]}" "init_data.json"
    download_file "$SOURCE_URL/${FILES[2]}" "searxng-settings.yml"
    
    # Download .env.example with the specified language
    if [ "$LANGUAGE" = "zh_CN" ]; then
        download_file "$SOURCE_URL/${ENV_EXAMPLES[0]}" ".env"
    else
        download_file "$SOURCE_URL/${ENV_EXAMPLES[1]}" ".env"
    fi
}
# If the folder `data` or `s3_data` exists, warn the user
if [ -d "data" ] || [ -d "s3_data" ]; then
    show_message "tips_already_installed"
    exit 0
else
    section_download_files
fi

section_configurate_host() {
    DEPLOY_MODE=$ask_result
    show_message "host_regenerate"
    # If run in local mode, skip this step
    if [[ "$DEPLOY_MODE" == "2" ]]; then
        HOST="localhost:3210"
        LOBE_HOST="$HOST"
        return 0
    fi

    # Configurate protocol for domain
    if [[ "$DEPLOY_MODE" == "0" ]]; then
        # Ask if enable https
        echo $(show_message "ask_protocol")
        ask "(y/n)" "y"
        if [[ "$ask_result" == "y" ]]; then
            PROTOCOL="https"
            # Replace all http with https
            sed "${SED_INPLACE_ARGS[@]}" "s#http://#https://#" .env
        fi
    fi
    
    # Check if sed is installed
    if ! command -v sed "${SED_INPLACE_ARGS[@]}" &> /dev/null ; then
        echo "sed" $(show_message "tips_no_executable")
        exit 1
    fi
    
    # If user not specify host, try to get the server ip
    if [ -z "$HOST" ]; then
        HOST=$(hostname -I | awk '{print $1}')
        # If the host is a private ip and the deploy mode is port mode
        if [[ "$DEPLOY_MODE" == "1" ]] && ([[ "$HOST" == "192.168."* ]] || [[ "$HOST" == "172."* ]] || [[ "$HOST" == "10."* ]]); then
            echo $(show_message "tips_private_ip_detected")
        fi
    fi
    
   
    case $DEPLOY_MODE in
        0)
            DEPLOY_MODE="domain"
            echo "LobeChat" $(show_message "ask_domain" "example.com")
            ask "(example.com)"
            LOBE_HOST="$ask_result"
            # If user use domain mode, ask for the domain of Minio and Casdoor
            echo "Minio S3 API" $(show_message "ask_domain" "minio.example.com")
            ask "(minio.example.com)"
            MINIO_HOST="$ask_result"
            echo "Casdoor API" $(show_message "ask_domain" "auth.example.com")
            ask "(auth.example.com)"
            CASDOOR_HOST="$ask_result"
            # Setup callback url for Casdoor
            sed "${SED_INPLACE_ARGS[@]}" "s/"example.com"/${LOBE_HOST}/" init_data.json
        ;;
        1)
            DEPLOY_MODE="ip"
            ask $(printf "%s%s" "LobeChat" $(show_message "ask_host")) "$HOST" $(printf "%s" $(show_message "tips_auto_detected"))
            LOBE_HOST="$ask_result"
            # If user use ip mode, use ask_result as the host
            HOST="$ask_result"
            # If user use ip mode, append the port to the host
            LOBE_HOST="${HOST}:3210"
            MINIO_HOST="${HOST}:9000"
            CASDOOR_HOST="${HOST}:8000"
            # Setup callback url for Casdoor
            sed "${SED_INPLACE_ARGS[@]}" "s/"localhost:3210"/${LOBE_HOST}/" init_data.json
        ;;
        *)
            echo "Invalid deploy mode: $ask_result"
            exit 1
        ;;
    esac
    
    # lobe host
    sed "${SED_INPLACE_ARGS[@]}" "s#^APP_URL=.*#APP_URL=$PROTOCOL://$LOBE_HOST#" .env
    # auth related
    sed "${SED_INPLACE_ARGS[@]}" "s#^AUTH_URL=.*#AUTH_URL=$PROTOCOL://$LOBE_HOST/api/auth#" .env
    sed "${SED_INPLACE_ARGS[@]}" "s#^AUTH_CASDOOR_ISSUER=.*#AUTH_CASDOOR_ISSUER=$PROTOCOL://$CASDOOR_HOST#" .env
    sed "${SED_INPLACE_ARGS[@]}" "s#^origin=.*#origin=$PROTOCOL://$CASDOOR_HOST#" .env
    # s3 related
    sed "${SED_INPLACE_ARGS[@]}" "s#^S3_PUBLIC_DOMAIN=.*#S3_PUBLIC_DOMAIN=$PROTOCOL://$MINIO_HOST#" .env
    sed "${SED_INPLACE_ARGS[@]}" "s#^S3_ENDPOINT=.*#S3_ENDPOINT=$PROTOCOL://$MINIO_HOST#" .env
    

    # Check if env modified success
    if [ $? -ne 0 ]; then
        echo $(show_message "host_regenerate_failed") "$HOST in \`.env\`"
    fi
}
show_message "ask_deploy_mode"
ask "(0,1,2)" "2"
if [[ "$ask_result" == "0" ]] || [[ "$ask_result" == "1" ]] || [[ "$ask_result" == "2" ]]; then
    section_configurate_host
else
    echo "Invalid deploy mode: $ask_result, please select 0, 1 or 2."
    exit 1
fi

# ==========================
# === Regenerate Secrets ===
# ==========================
section_regenerate_secrets() {
    # Check if openssl is installed
    if ! command -v openssl &> /dev/null ; then
        echo "openssl" $(show_message "tips_no_executable")
        exit 1
    fi
    if ! command -v tr &> /dev/null ; then
        echo "tr" $(show_message "tips_no_executable")
        exit 1
    fi
    if ! command -v fold &> /dev/null ; then
        echo "fold" $(show_message "tips_no_executable")
        exit 1
    fi
    if ! command -v head &> /dev/null ; then
        echo "head" $(show_message "tips_no_executable")
        exit 1
    fi
    
    generate_key() {
        if [[ -z "$1" ]]; then
            echo "Usage: generate_key <length>"
            return 1
        fi
        echo $(openssl rand -hex $1 | tr -d '\n' | fold -w $1 | head -n 1)
    }
    
    if ! command -v sed &> /dev/null ; then
        echo "sed" $(show_message "tips_no_executable")
        exit 1
    fi
    echo $(show_message "security_secrect_regenerate")
    
    # Generate CASDOOR_SECRET
    CASDOOR_SECRET=$(generate_key 32)
    if [ $? -ne 0 ]; then
        echo $(show_message "security_secrect_regenerate_failed") "CASDOOR_SECRET"
    else
        # Search and replace the value of CASDOOR_SECRET in .env
        sed "${SED_INPLACE_ARGS[@]}" "s#^AUTH_CASDOOR_SECRET=.*#AUTH_CASDOOR_SECRET=${CASDOOR_SECRET}#" .env
        if [ $? -ne 0 ]; then
            echo $(show_message "security_secrect_regenerate_failed") "AUTH_CASDOOR_SECRET in \`.env\`"
        fi
        # replace `clientSecrect` in init_data.json
        sed "${SED_INPLACE_ARGS[@]}" "s#dbf205949d704de81b0b5b3603174e23fbecc354#${CASDOOR_SECRET}#" init_data.json
        if [ $? -ne 0 ]; then
            echo $(show_message "security_secrect_regenerate_failed") "AUTH_CASDOOR_SECRET in \`init_data.json\`"
        fi
    fi
    
    # Generate Casdoor User
    CASDOOR_USER="admin"
    CASDOOR_PASSWORD=$(generate_key 10)
    if [ $? -ne 0 ]; then
        echo $(show_message "security_secrect_regenerate_failed") "CASDOOR_PASSWORD"
        CASDOOR_PASSWORD="123"
    else
        # replace `password` in init_data.json
        sed "${SED_INPLACE_ARGS[@]}" "s/"123"/${CASDOOR_PASSWORD}/" init_data.json
        if [ $? -ne 0 ]; then
            echo $(show_message "security_secrect_regenerate_failed") "CASDOOR_PASSWORD in \`init_data.json\`"
        fi
    fi
    # Generate Minio S3 User Password
    MINIO_ROOT_PASSWORD=$(generate_key 8)
    if [ $? -ne 0 ]; then
        echo $(show_message "security_secrect_regenerate_failed") "MINIO_ROOT_PASSWORD"
        MINIO_ROOT_PASSWORD="YOUR_MINIO_PASSWORD"
    else
        # Search and replace the value of S3_SECRET_ACCESS_KEY in .env
        sed "${SED_INPLACE_ARGS[@]}" "s#^MINIO_ROOT_PASSWORD=.*#MINIO_ROOT_PASSWORD=${MINIO_ROOT_PASSWORD}#" .env
        if [ $? -ne 0 ]; then
            echo $(show_message "security_secrect_regenerate_failed") "MINIO_ROOT_PASSWORD in \`.env\`"
        fi
    fi
}

show_message "ask_regenerate_secrets"
ask "(y/n)" "y"
if [[ "$ask_result" == "y" ]]; then
    section_regenerate_secrets
fi

section_init_database() {
    if ! command -v docker &> /dev/null ; then
        echo "docker" $(show_message "tips_no_executable")
	    return 1
    fi

    if ! docker compose &> /dev/null ; then
	    echo "docker compose" $(show_message "tips_no_executable")
	    return 1
    fi

    # Check if user has permissions to run Docker by trying to get the status of Docker (docker status).
    # If this fails, the user probably does not have permissions for Docker.
    # ref: https://github.com/paperless-ngx/paperless-ngx/blob/89e5c08a1fe4ca0b7641ae8fbd5554502199ae40/install-paperless-ngx.sh#L64-L72
    if ! docker stats --no-stream &> /dev/null ; then
	    echo $(show_message "tips_no_docker_permission")
	    return 1
    fi

    docker compose pull
    docker compose up --detach postgresql casdoor
    # hopefully enough time for even the slower systems
	sleep 15
	docker compose stop

    # Init finished, remove init mount
    echo '{}' > init_data.json
}

show_message "ask_init_database"
ask "(y/n)" "y"
if [[ "$ask_result" == "y" ]]; then
    # If return 1 means failed
    section_init_database
    if [ $? -ne 0 ]; then
        echo $(show_message "tips_init_database_failed")
    fi
else 
    show_message "tips_init_database_failed"
fi

section_display_configurated_report() {
    # Display configuration reports
    echo $(show_message "security_secrect_regenerate_report")
    
    echo -e "LobeChat: \n  - URL: $PROTOCOL://$LOBE_HOST \n  - Username: user \n  - Password: ${CASDOOR_PASSWORD} "
    echo -e "Casdoor: \n  - URL: $PROTOCOL://$CASDOOR_HOST \n  - Username: admin \n  - Password: ${CASDOOR_PASSWORD}\n"
    echo -e "Minio: \n  - URL: $PROTOCOL://$MINIO_HOST \n  - Username: admin\n  - Password: ${MINIO_ROOT_PASSWORD}\n"
    
    # if user run in domain mode, diplay reverse proxy configuration
    if [[ "$DEPLOY_MODE" == "domain" ]]; then
        echo $(show_message "tips_add_reverse_proxy")
        printf "\n%s\t->\t%s\n" "$LOBE_HOST" "127.0.0.1:3210"
        printf "%s\t->\t%s\n" "$CASDOOR_HOST" "127.0.0.1:8000"
        printf "%s\t->\t%s\n" "$MINIO_HOST" "127.0.0.1:9000"
    fi

    # Display final message

    printf "\n%s\n\n" "$(show_message "tips_run_command")"
    print_centered "docker compose up -d" "green"
    printf "\n%s\n" "$(show_message "tips_allow_ports")"
    printf "\n%s" "$(show_message "tips_show_documentation")"
    printf "%s\n" $(show_message "tips_show_documentation_url")
}
section_display_configurated_report
