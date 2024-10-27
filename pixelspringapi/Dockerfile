FROM maven:3.8.5-openjdk-17 as builder
# cria uma pasta
WORKDIR /app
# copia todos os arquivos para a pasta /app
COPY . .
# instala todas as dependencias
RUN mvn dependency:resolve
# faz o build pulando os testes
RUN mvn clean package -DskipTests

FROM amazoncorretto:17
WORKDIR /app
# copia o jar que foi gerado na primeira camada e copia para /app da segunda camada
COPY --from=builder  ./app/target/*.jar ./application.jar
# porta que vai rodar o container
EXPOSE 8080

# variável de ambiente
ENV POSTGRES_HOST=localhost
RUN echo "the env var POSTGRES_HOST value is $POSTGRES_HOST"

# comando que inicializa a aplição no modo de produção
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=production", "application.jar"]