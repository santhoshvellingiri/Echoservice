# Echo Service

Echo service is a micro service app that listens to HTTP traffic on POST and GET Verb and respond the inbound traffic without processing or saving

## Deploying it to SAP Cloud Foundry

1. Download or Clone this repository to your machine.

2. Open command prompt and navigate to the Echoservice folder

3. Login to Cloud Foundry. Use you respective API end point

```bash
cf login -a https://api.cf.eu10.hana.ondemand.com
```
4. Push the APP to Cloud Foundry
```bash
cf push
```
5. Upon successful completion, verify the deployment by listing the apps.
```bash
cf apps
```

## More Information
[SAP CPI – HTTP Tracing using Own Echo Service](https://blogs.sap.com/2020/09/29/sap-cpi-http-tracing-using-an-echo-service/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)