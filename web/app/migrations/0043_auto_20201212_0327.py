# Generated by Django 2.2.10 on 2020-12-12 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0042_auto_20201202_1937'),
    ]

    operations = [
        migrations.AddField(
            model_name='mobiledevice',
            name='preferred_timezone',
            field=models.CharField(max_length=32, null=True),
        ),
    ]
